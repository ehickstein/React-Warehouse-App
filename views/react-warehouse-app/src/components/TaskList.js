import React from 'react';
import Task from './Task';

const TaskList = () => {
  <div className='container'>
    <div className='row'>
      <div className='col sm12'>
        <ul className='collection'>
          <Task task={this.props.task}/>
        </ul>
      </div>
    </div>
  </div>
}

export default TaskList;
