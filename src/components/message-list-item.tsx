import { h } from 'preact'

import './message-list-item.scss'

export interface Props {
    subject: string,
    from: string,
}

const MessageListItem = (props: Props) => (
    <li class="message-list-item">
        <h3>{props.subject}</h3>
        <h6>{props.from}</h6>
    </li>
)

export default MessageListItem
