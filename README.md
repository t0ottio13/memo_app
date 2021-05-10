# URL Memo アプリ
## アプリの概要
調べものをした時のURLを保存しておくためのMemoサイト

## 工夫した点、こだわった点
アイデアなどは特に浮かばなかったため、技術的な挑戦課題とすることにしました。
以下のライブラリを新しく挑戦し、アプリを作りました。
- React.js
- Bootstrap

### React.js
- 環境構築は比較的簡単にできた。npmだと動かなくて、yarnだと動いたなど不明点は残ったものの一通りの経験ができ、良かったです。
- コンポーネントやステート、アトミックデザインといったものに触り、部分部分での理解はできました。

### Bootstrap
- 簡単にCSSが実装できて、とても楽でした。
- 独自性には乏しくなるので、処理やシステムメインでモックをさっと作りたい時などいいと思いました。

## 苦戦した点、ハマりポイント
- 環境構築は、分からなくてもトライ＆エラーで次々試していく事が大事だと思いました。
- 無限ループが発生したこと => 初めは驚いたが、エラー文をたどっていくと紐解けた。
- ステートや、オブジェクト、値の状態を把握することが難しかった。都度都度の console.logが大事だと実感しました。
- 特にコンポーネントで作る際は同じ単語で命名できるので、valueなどコンポーネントごとに値や使い方が違うものに惑わされました。

## 感想
新しいライブラリに触れることはかなり楽しかったです。  
また、同時に素のJS(バニラ.jsと言うらしい)の理解の大切さも実感できました。  
同じものを別々の方法で書くことにより、違いが認識でき双方の理解が進むと思いました。  


## 参考資料
- 公式ドキュメント（https://ja.reactjs.org/）
- react.js & next.js超入門 第2版
- 日本一わかりやすいReact入門(https://youtu.be/Vzvbke_CLAs)
- 公式ドキュメント(https://getbootstrap.jp/)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
