// write your CatList component here

import React from 'react'

class CatList extends React.Component {
    cats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} />)
    }

    render() {
        return (
            <div>
                {this.cats()}
            </div>
        )
    }
}

export default CatList