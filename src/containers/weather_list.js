import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Table } from 'semantic-ui-react';

class WeatherList extends Component {
    renderWeather(cityData) {
        return(
            <Table.Row key={cityData.city.id}>
                <Table.Cell>{cityData.city.name}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Temperature</Table.HeaderCell>
                        <Table.HeaderCell>Pressure</Table.HeaderCell>
                        <Table.HeaderCell>Humidity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.weather.map(this.renderWeather)}
                </Table.Body>
            </Table>
        )
    }
}

function mapStateToProps({ weather }) { // ==== state
    return { weather };// === { weather: state.weather }

}

export default connect(mapStateToProps)(WeatherList);