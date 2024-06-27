import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  Container1,
  Container2,
  CardContainer,
  Content,
  ImageContainer,
  Image,
  CounterHeading,
  InputButtonContainer,
  InputElement,
  ButtonElement,
  CharacterListContainer,
  EachList,
  WordAndCount,
} from './styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputText: '',
    characterList: [],
  }

  addInputValue = event => {
    this.setState({inputText: event.target.value})
  }

  addWordsToCharacterList = () => {
    const {inputText, characterList} = this.state
    const newList = {
      id: uuidv4(),
      word: inputText,
      count: inputText.length,
    }
    this.setState({characterList: [...characterList, newList], inputText: ''})
  }

  render() {
    const {inputText, characterList} = this.state

    return (
      <MainContainer>
        <Container1>
          <CardContainer>
            <Content>Count the characters like a Boss...</Content>
          </CardContainer>
          {characterList.length < 1 ? (
            <ImageContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </ImageContainer>
          ) : (
            <CharacterListContainer>
              {characterList.map(eachList => (
                <EachList key={eachList.id}>
                  <WordAndCount>
                    {eachList.word}: {eachList.count}
                  </WordAndCount>
                </EachList>
              ))}
            </CharacterListContainer>
          )}
        </Container1>
        <Container2>
          <CounterHeading>Character Counter</CounterHeading>
          <InputButtonContainer onSubmit={this.addWordsToCharacterList}>
            <InputElement
              type="text"
              placeholder="Enter the Characters here"
              value={inputText}
              onChange={this.addInputValue}
            />
            <ButtonElement type="submit">Add</ButtonElement>
          </InputButtonContainer>
        </Container2>
      </MainContainer>
    )
  }
}

export default App
