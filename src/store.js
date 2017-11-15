import createStore from 'redux-zero';
const usersBase = [
  {
    name: '',
    last: '',
    email: '',
    pasword: '',
    teams: [
      {
        name: '',
        members: '',
        boards: [
          {
            name: '',
            lists: [
              {
                name: '',
                cards: []
              }
            ]
          }
        ]
      }
    ]
  }
]

const users = [
  {
    name: 'Alejandra',
    last: 'Adrian',
    email: 'ale@gmail.com',
    pasword: '123',
    teams: [
      {
        name: 'Personal Boards',
        members: ['user'],
        boards: [
          {
            name: 'Board 1',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          },
          {
            name: 'Board 2',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          }
        ]
      },
      {
        name: 'States',
        members: ['user'],
        boards: [
          {
            name: 'Board 1',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          },
          {
            name: 'Board 2',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Laura',
    last: 'Garcia',
    email: 'lau@gmail.com',
    pasword: '123',
    teams: [
      {
        name: 'Personal Boards',
        members: ['user'],
        boards: [
          {
            name: 'Board 1',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          },
          {
            name: 'Board 2',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          }
        ]
      },
      {
        name: 'States',
        members: 'user',
        boards: [
          {
            name: 'Board 1',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          },
          {
            name: 'Board 2',
            lists: [
              {
                name: 'List 1',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 2',
                cards: ['card 1', 'card 2', 'card 3']
              },
              {
                name: 'List 3',
                cards: ['card 1', 'card 2', 'card 3']
              }
            ]
          }
        ]
      }
    ]
  }
]

const initialState = {
  users: users,
}

const store = createStore(initialState);
export default store; 