import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`
export const Container1 = styled.div`
  background-color: #ffc533;
  width: 45%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`
export const Container2 = styled.div`
  background-color: #0f172a;
  width: 45%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 35%;
  background-color: #ffbf1f;
  padding: 30px;
`
export const Content = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 700;
  color: #0f172a;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65%;
`
export const Image = styled.img`
  height: 70%;
  width: 90%;
`
export const CharacterListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-wrap: wrap;
  height: 65%;
`
export const EachList = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
`
export const WordAndCount = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin: 0px;
`

export const CounterHeading = styled(Content)`
  font-size: 35px;
  color: #ffbf1f;
  text-align: center;
`
export const InputButtonContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InputElement = styled.input`
  height: 40px;
  width: 60%;
  margin-right: 30px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  padding-left: 15px;
`
export const ButtonElement = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffbf1f;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #272c47;
`
