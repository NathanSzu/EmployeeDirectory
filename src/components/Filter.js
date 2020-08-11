import React from 'react';
import Row from './Row'

class Filter extends React.Component {
    state = {
        search: "",
    }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getBaseBreedsList()
//       .then(res => this.setState({ breeds: res.data.message }))
//       .catch(err => console.log(err));
//   }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { value } = event.target;
    
        // Updating the input's state
        this.setState({
          search: value
        })
        Row.filterEmployees(this.state.search)
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