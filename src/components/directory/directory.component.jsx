import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import directoryEntries from './sections';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: directoryEntries
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections
                    .map(({ id, title, imageUrl, size }) =>
                        <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />)}
            </div>
        );
    }

}

export default Directory;