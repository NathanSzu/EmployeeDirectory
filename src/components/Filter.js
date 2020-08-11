import React from 'react';

class Filter extends React.Component {
    state = {
        search: "",
        sortAlpha: false,
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <form className="form m-2">
                <input 
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search Directory"
                />
            </form>
        //     <datalist id="breeds">
        //     {props.breeds.map(breed => (
        //       <option value={breed} key={breed} />
        //     ))}
        //   </datalist>
        )
    }

}

export default Filter;