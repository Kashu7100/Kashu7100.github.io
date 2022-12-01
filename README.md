## Installation
Install Ruby and other prerequisites:
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```

## Usage
### Local build
```bash
git clone https://github.com/Kashu7100/Kashu7100.github.io.git
cd Kashu7100.github.io.git

bundle exec jekyll serve
```
Then browse to `http://localhost:4000`