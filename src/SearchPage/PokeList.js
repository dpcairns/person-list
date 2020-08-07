import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const { 
            pokeState, 
            handleNextClick, 
            handlePrevClick,
            currentPage,
            totalPages
         } = this.props;

        return (
            <div>
                {/* how can we prevent going to too many pages? how can we prevent user from going to negative or zero pages? */}
                {
                    pokeState.length > 0 && <div>
                        {
                            Number(currentPage) !== 1 
                            && <button onClick={handlePrevClick}>Prev</button>
                        }
                        {/* how can i figure out when ive reached the end? */}
                        {
                        Number(currentPage) !== Number(totalPages) &&
                        <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}

                    </div>
                }
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                       {pokeState.map(pokemon => <PokeItem pokemon={pokemon} />)}
                    </div>
            </div>
        )
    }
}
