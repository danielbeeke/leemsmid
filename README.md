# Installing

- gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
- \curl -sSL https://get.rvm.io | bash -s stable
- rvm install 2.7
- rvm alias create default 2.7
- bundle install

# Running locally

- bundle exec jekyll serve
- npx netlify-cms-proxy-server