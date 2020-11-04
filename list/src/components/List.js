import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchCharacter} from '../actions/actions'

const CharacterList = (props) =>{
    useEffect(()=>{
        props.fetchCharacter();
    },[])
    return(
        <div>
            <h2>Sasuke</h2>
            {props.isLoading ? <p>Loading Character data...</p> : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.animeography.map((animeography) => (
        <div>
          <h4>{animeography.name}</h4>
        </div>
      ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      characters: state.characterData,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, { fetchCharacter })(CharacterList);