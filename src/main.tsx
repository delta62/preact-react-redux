import { Provider } from 'react-redux'
import { h, render } from 'preact'

import store from './store'

import MessageListItem from './components/message-list-item'

render(
    <div class="app">
        <Provider store={store}>
            <MessageListItem subject="Hello world" from="sam@samnoedel.com" />
        </Provider>
    </div>,
    document.body,
)
