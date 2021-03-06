import React from 'react';
import { Link } from 'react-router'

export default class MonthItem extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
			var link = `/publication/${this.props.slug}/year-${this.props.month.year}-month-${this.props.month.month.toLowerCase()}`;

     	return <Link to={link} className="list-group-item d-flex align-items-center list-group-item-action justify-content-between">
		 		{this.props.month.month}
		 		<span className="badge badge-primary badge-pilll">{this.props.month.count.toLocaleString()}</span>
		 	</Link>
    }
}
