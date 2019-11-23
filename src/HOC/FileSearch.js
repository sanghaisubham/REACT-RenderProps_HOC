import React from "react";
// Where the data is located
import preload from "./locations.json";
// Manages the data
import LocationCard from "./LocationCard";

// Renders the presentation of the data
//This component will render the data in a LocationCard component.
const Location = props => {
  const { searchTerm } = props;
  return (
    <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
      </div>
      <div>
        {preload.data
          // Filter locations by the inputted search term
          .filter(
            location =>
              `${location.name} ${location.zone} ${location.region}`
                .toUpperCase()
                .indexOf(searchTerm.toUpperCase()) >= 0
          )
          // Loop through the locations
          .map(location => (
            <LocationCard key={location.id} {...location} />
          ))}
      </div>
    </div>
  );
};

//with search is the HOC here
const withSearch = WrappedComponent => {
  return class extends Component {
    state = {
      searchTerm: ""
    };

    //The value entered by the user in the search box is obtained and used to set the new state for searchTerm
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <div>
          <div>
            <input
              onChange={this.handleSearch}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search"
            />
            {/* The searchTerm will be passed as props to the wrapped component, 
            which will be used to filter the pulled data */}
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
  };
};

//This is pass the searchTerm as prop in the Location Component
const withSearchLocation = withSearch(Location);
