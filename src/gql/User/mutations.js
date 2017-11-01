import {gql} from 'react-apollo'
import {USER_PAYLOAD_FRAGMENT} from './fragments'

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser(
    $id: ID!,
    $email: String,
    $familyName: String,
    $givenName: String,
    $name: String,
    $picture: String,
    $pictureLarge: String
  ){
    updateUser(
      id: $id,
      email: $email,
      familyName: $familyName,
      givenName: $givenName,
      name: $name,
      picture: $picture,
      pictureLarge: $pictureLarge
    ){
      ...userPayload
    }
  }
  ${USER_PAYLOAD_FRAGMENT}
`
export const UPDATE_USER_PROFILE_MUTATION = gql`
  mutation updateUser(
    $id: ID!,
    $isHacker: Boolean,
    $tagline: String
  ){
    updateUser(
      id: $id,
      hacker: $isHacker,
    ){
      ...userPayload
    }
  }
  ${USER_PAYLOAD_FRAGMENT}
`
export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $idToken: String!,
    $email: String,
    $familyName: String,
    $givenName: String,
    $name: String,
    $picture: String,
    $pictureLarge: String
  ){
    createUser(
      authProvider: {auth0: {idToken: $idToken}},
      email: $email,
      familyName: $familyName,
      givenName: $givenName,
      name: $name,
      picture: $picture,
      pictureLarge: $pictureLarge,
    ){
      ...userPayload
    }
  }
  ${USER_PAYLOAD_FRAGMENT}
`
