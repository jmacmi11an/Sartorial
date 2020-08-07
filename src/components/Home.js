import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DressingRoom from './DressingRoom';

class Home extends Component{
  constructor(props){
    super(props)
  }

  render(props){
    console.log(this.props.userDetails)
    return(

      <div>
        {(this.props.userDetails.wardrobeZero) ?
          <div>
            <DressingRoom
              filteredClothes={this.props.filteredClothes}
              userDetails={this.props.userDetails}
            />
          </div>
          :
          <div>
            <h2>Minimal and masterful dressing</h2>
            <h4>A gentleman's guide to timeless fashion in a capsule closet. With an emphasis on quality over quantity, this curated 16 piece wardrobe provides the foundation for impeccable style. </h4>
            <p>Here at Sartorial we believe that elegant and appropriate style can be achieved by any man who desires it. Reduce your wardrobe from many items with specific functions, to a few items with incredible versatility. Decision fatigue is real. How you present yourself is important. By investing in the well-crafted basics ensure that you will always be suitably dressed for the occasion.</p>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Home;
