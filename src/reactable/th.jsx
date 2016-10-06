import React from 'react';
import { isUnsafe } from './unsafe';
import { filterPropsFrom } from './lib/filter_props_from';

export class Th extends React.Component {
    constructor() {
        super();

        this.state = {
            showFilter: false
        };

        this._onClickCallback = this._onClickCallback.bind(this);
    }

    _onClickCallback() {
        this.setState({showFilter: !this.state.showFilter});
    }

    render() {
        let childProps;

        if(this.state.showFilter) {
            return <th>
                <input type="text" placeholder="filter" onClick={this._onClickCallback}/>
            </th>
        } else {
            if (isUnsafe(this.props.children)) {
                return <th {...filterPropsFrom(this.props)}
                           dangerouslySetInnerHTML={{__html: this.props.children.toString()}} onClick={this._onClickCallback}/>
            } else {
                return <th {...filterPropsFrom(this.props)} onClick={this._onClickCallback}>
                    {this.props.children}
                </th>;
            }
        }
    }
};

