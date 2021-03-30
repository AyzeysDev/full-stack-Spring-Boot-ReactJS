import React, { Component } from 'react'
import moment from 'moment'
import Auth from './Auth.js'
import ActivityService from '../../api/list/ActivityService.js'


class ActivityList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activities: [],
            message: null
        }
        this.deleteActivityClicked = this.deleteActivityClicked.bind(this)
        this.updateActivityClicked = this.updateActivityClicked.bind(this)
        this.addActivityClicked = this.addActivityClicked.bind(this)
        this.refreshActivity = this.refreshActivity.bind(this)
    }

    componentDidMount() {
        this.refreshActivity();
    }

    refreshActivity() {
        let username = Auth.getLoggedInUserName()
        ActivityService.retrieveAllActivity(username)
            .then(
                response => {
                    this.setState({ activities: response.data })
                }
            )
    }

    deleteActivityClicked(id) {
        let username = Auth.getLoggedInUserName()
        ActivityService.deleteActivity(username, id)
            .then(
                response => {
                    this.setState({ message: `Activity ${id} is Successfully Deleted` })
                    this.refreshActivity()
                }
            )

    }

    addActivityClicked() {
        this.props.history.push(`/list/-1`)
    }

    updateActivityClicked(id) {
        this.props.history.push(`/list/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Activities</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is_Finished?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.activities.map(
                                    activity =>
                                        <tr key={activity.id}>
                                            <td>{activity.description}</td>
                                            <td>{moment(activity.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{activity.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateActivityClicked(activity.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteActivityClicked(activity.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addActivityClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityList;