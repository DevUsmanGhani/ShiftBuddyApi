Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :employees
      resources :shifts, except: %i[create]
      resources :cash_drops, except: %i[create]
      resources :checks, except: %i[create]
      resources :notes, except: %i[create]
      resources :cash_drops, except: %i[create]
      resources :paid_outs, except: %i[create]
      resources :inventory_items, except: %i[create]
      resources :managers do
        scope module: :managers do
          resources :employees, only: %i[index create] do
            scope module: :employees do
              resources :shifts, only: %i[index create] do
              end
            end
          end
        end
      end
    end
  end
end
