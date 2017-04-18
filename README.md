# PNG_Alpha-er

Add alpha as transparent 99% to PNG files

command: `electron . foo.png [ bar.png hoge.png ...]`

## Usage

1. install Node.js and npm
2. run `npm install -g electron`
3. run `cd <this repository's directory>`
4. run `electron . foo.png` to make foo-alpha.png

### multi files feature is available

if ran `electron . a.png b.png c.png`, will be made follow files

* a-alpha.png
* b-alpha.png
* c-alpha.png
