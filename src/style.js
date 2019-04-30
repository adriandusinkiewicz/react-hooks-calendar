import styled from 'styled-components'

export const Box = styled.div `
    margin: 40px auto;
    max-width: 640px;
`

export const Top = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 24px;
`

export const Button = styled.button `
    padding: 10px 20px;
    background: blueviolet;
    color: white;
    cursor: pointer;
    border: none;
`

export const Calendar = styled.div `
    text-align: center;
`

export const Days = styled.div `
    display: flex;
    flex-wrap: wrap;
    opacity: ${props => props.top ? '0.6': '1'}; 
`

export const Day = styled.div `
    width: calc(100% / 7);
    padding: 1px;
    cursor: ${props => props.top ? 'auto' : 'pointer'};
    .text {
        padding: 20px 10px;
        background: ${props => props.top ? 'blue' : props.unavailable ? 'purple' : props.current ? 'green': 'grey'};
        opacity: ${props => props.out ? '0.2': '1'};
        transition: all 0.4s;
        &:hover {
            background: ${props => props.top ? 'blue' : 'yellow'};
        }
    }
`