import React from 'react';
import { motion } from 'framer-motion';
import {
  CharacterContainer,
  CatBody,
  CatHead,
  CatEar,
  CatEye,
  CatNose,
  CatMouth,
  CatStripe,
  CatTail,
  CatPaw,
  Hoodie,
  MoneyStack,
  FlameEffect,
} from './HypurrCharacter.styles';

const HypurrCharacter = ({ 
  type = 'happy', 
  size = 100, 
  position = {}, 
  className = '',
  ...props 
}) => {
  const getCharacterElements = () => {
    switch (type) {
      case 'money':
        return (
          <>
            <CatBody size={size}>
              <Hoodie />
              <CatHead size={size}>
                <CatEar left />
                <CatEar right />
                <CatStripe />
                <CatEye left happy />
                <CatEye right happy />
                <CatNose />
                <CatMouth happy />
              </CatHead>
              <CatTail />
              <CatPaw left />
              <CatPaw right />
            </CatBody>
            <MoneyStack left />
            <MoneyStack right />
          </>
        );
      
      case 'fire':
        return (
          <>
            <FlameEffect />
            <CatBody size={size}>
              <Hoodie />
              <CatHead size={size}>
                <CatEar left />
                <CatEar right />
                <CatStripe />
                <CatEye left surprised />
                <CatEye right surprised />
                <CatNose />
                <CatMouth surprised />
              </CatHead>
              <CatTail />
              <CatPaw left />
              <CatPaw right />
            </CatBody>
          </>
        );

      case 'sleepy':
        return (
          <CatBody size={size}>
            <Hoodie />
            <CatHead size={size}>
              <CatEar left />
              <CatEar right />
              <CatStripe />
              <CatEye left sleepy />
              <CatEye right sleepy />
              <CatNose />
              <CatMouth sleepy />
            </CatHead>
            <CatTail />
            <CatPaw left />
            <CatPaw right />
          </CatBody>
        );

      default: // happy
        return (
          <CatBody size={size}>
            <Hoodie />
            <CatHead size={size}>
              <CatEar left />
              <CatEar right />
              <CatStripe />
              <CatEye left />
              <CatEye right />
              <CatNose />
              <CatMouth />
            </CatHead>
            <CatTail />
            <CatPaw left />
            <CatPaw right />
          </CatBody>
        );
    }
  };

  return (
    <CharacterContainer
      className={className}
      size={size}
      position={position}
      as={motion.div}
      {...props}
    >
      {getCharacterElements()}
    </CharacterContainer>
  );
};

export default HypurrCharacter;
