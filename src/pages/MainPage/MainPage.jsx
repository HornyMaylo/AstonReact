import { useGetFilmsQuery } from '../../store/Api/films';

import { ErrorBoundaries } from '../../components/ErrorBoundary/ErrorBoundary';

export function MainPage() {
  // const {data = [], isLoading, error} = useGetFilmsQuery();

  // if (error){
  //    return(<div>Some Error</div>)
  // }

  // console.log(data);
  return (
    // <ErrorBoundaries>
    //   <h1>Test</h1>
    // </ErrorBoundaries>
    <h1>Test</h1>
  );
}
