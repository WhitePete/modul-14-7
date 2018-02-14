var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('div', {className: 'contactImage'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'})
          ),
        React.createElement('div', {className: 'contactInfo'},
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto: ' + this.props.item.email}, this.props.item.email)
        )
      )
    );
  }
});