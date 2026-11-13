"""Check that exported portfolio content is visible before JavaScript runs."""
from html.parser import HTMLParser
from pathlib import Path
import re


class VisibilityCheck(HTMLParser):
    in_main = False
    headings = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'main':
            self.in_main = True
        if self.in_main:
            style = attrs.get('style', '')
            assert not re.search(r'(?:^|;)\s*opacity\s*:\s*0(?:\.0+)?\s*(?:;|$)', style), (
                f'Content starts invisible: <{tag} style="{style}">'
            )
            if tag == 'h1':
                self.headings += 1

    def handle_endtag(self, tag):
        if tag == 'main':
            self.in_main = False


check = VisibilityCheck()
check.feed(Path('out/index.html').read_text())
assert check.headings == 1, 'Expected the exported portfolio heading'
print('PASS: exported content is visible without JavaScript')
