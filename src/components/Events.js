import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Card, Dimmer, Loader, Feed } from "semantic-ui-react";
import Moment from "react-moment";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.style = { 'pastEvents': { 'textAlign': 'right' } };
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid columns={2}>
              <Grid.Column key={1}>
                Prossimi Eventi
              </Grid.Column>
              <Grid.Column key={2} style={this.style.pastEvents}>
                <Link to="/past-events">(Eventi Passati)</Link>
              </Grid.Column>
            </Grid>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Dimmer inverted active={this.loadingEvents}>
            <Loader inverted>Qualche secondo e sono pronto...</Loader>
          </Dimmer>
          <Feed>
            {(this.props.events).map(
              event => (
                <Feed.Event
                  href={event.url}
                  image={event.logo}
                  key={event.name}
                  date={<Moment locale="IT" format=" Do MMMM YYYY @ HH:mm">{event.date}</Moment>}
                  summary={event.name}
                  extraText={event.location}
                />
              )
            )}
          </Feed>
        </Card.Content>
      </Card>
    );
  }

}

export default Events;
