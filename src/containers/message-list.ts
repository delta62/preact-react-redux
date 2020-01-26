import { connect } from 'react-redux'

import MessageList from '../components/message-list'

export function mapStateToProps(_state: any) {
    return { }
}

export default connect(mapStateToProps)(MessageList)
