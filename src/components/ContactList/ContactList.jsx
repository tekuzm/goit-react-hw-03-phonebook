import PropTypes from 'prop-types';

// ========== styles ==========

import { List, Item, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        {name}: {number}
        <DeleteBtn onClick={() => deleteContact(id)} type="button">
          Delete
        </DeleteBtn>
      </Item>
    ))}
  </List>
);

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
