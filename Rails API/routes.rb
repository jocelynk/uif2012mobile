Uif2012::Application.routes.draw do
  devise_for :users

  #mobile routes
  resources :tokens,:only => [:create, :destroy]
  match 'getToken' => 'tokens#create', :via => :post
  match 'destroyToken' => 'tokens#destroy', :via => :delete
  match 'ajax_allergies' => 'allergies#ajax_allergies', :via => :get
  match 'getTodaysEvents' => 'mobile#getTodaysEvents', :via => :get
  match 'createAttendances' => 'mobile#createAttendances', :via => :post
  match 'getPhoto' => 'mobile#getPhoto', :via => :post
  match 'searchForStudent' => 'mobile#searchForStudent', :via => :get
 

end
