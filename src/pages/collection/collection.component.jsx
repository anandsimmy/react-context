import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionContext from '../../contexts/collections/collection-context'

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections= useContext(CollectionContext)
  const { title, items } = collections[match.params.collectionId]
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
