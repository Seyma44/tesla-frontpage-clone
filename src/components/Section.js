import React from 'react'
import { Fade } from 'react-reveal'
import { 
          Wrap, 
          ItemText, 
          ButtonGroup, 
          LeftButton, 
          RightButton, 
          DownArrow, 
          Buttons 
    } from './SectionElement'

function Section({title, description,leftBtnText, rightBtnText,backgroundImg}) {  ///it can be used props.title
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
        </Buttons>
        <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  )
}

export default Section

