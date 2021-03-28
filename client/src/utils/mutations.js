import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $sex: String!, $bio: String!) {
    addUser(username: $username, email: $email, password: $password, sex: $sex, bio: $bio) {
      token
      user {
        _id
      }
    }
  }
`;