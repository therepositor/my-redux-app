import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPosts } from './actions/postActions'

class PostForm extends Component {
    constructor (props)   {
        super (props)
        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post)
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <input type='textarea' name='body' onChange={this.handleChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    createPosts: PropTypes.func.isRequired,

}
export default connect(null, { createPosts })(PostForm);
