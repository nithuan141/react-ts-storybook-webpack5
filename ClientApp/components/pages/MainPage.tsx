import React from 'react';

interface MainpageProps {
  /**
   * name of the team
   */
  team: string;
}

const MainPage = (
  props: MainpageProps,
): React.FunctionComponentElement<MainpageProps> => {
  const { team } = props;
  return <h3>Hello {team}</h3>;
};

export default MainPage;
