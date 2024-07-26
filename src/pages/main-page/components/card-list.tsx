import ItemCard, { CardProps } from '../../../components/item-card/item-card';

const CardList = ({ offersData }: { offersData: CardProps[] }) => (
  <div className="cities__places-list places__list tabs__content">
    {' '}
    {offersData.map((item) => (
      <ItemCard key={item.id} data={item} />
    ))}
  </div>
);

export { CardList };
