import { render } from 'preact'
import '@fontsource/geist-sans'
import '@fontsource/geist-sans/200.css'
import '@fontsource/geist-sans/600.css'
import './index.css'
import { App } from './app.jsx'

render(<App />, document.getElementById('app'))
