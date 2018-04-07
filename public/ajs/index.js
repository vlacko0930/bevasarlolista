angular
  .module( 'a', ['ui.bootstrap'] )
  .controller( 'c', ($scope,$http) => {
    lista=[]
    $scope.szurtlista=lista
    $scope.bevszur=(e)=>
    {
      if (e.key=="Enter")
      {
        $scope.gomblatszik=true
        lista.push( $scope.input )
        lista.sort( ( a, b ) => a.localeCompare( b ) )
        $scope.input=''
        $scope.szurtlista=lista
      }
      reg=new RegExp('^'+$scope.input+'.*','i')
      $scope.szurtlista = lista.filter( inp => reg.test(inp))
    }
    $scope.kuld=()=>
    {
      $http
        .post("/req/blment",{bl:lista})
        .then(resp=>{
          console.log("szerverről "+resp.data)
        })
    }
  } )
