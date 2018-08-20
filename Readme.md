# Build

```bash
sudo apt install npm nodejs-legacy -y
sudo npm install gulp -g
sudo npm install yarn -g
npm install
yarn
cd bower_components/kendo-ui
gulp build
cd ..
cd ..
gulp copyfiles
```


# Add new javascript library

```bash
bower install TheBowerPackageName
```

Add as submodule and reference js libraries as needed.