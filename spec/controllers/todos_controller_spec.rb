require 'rails_helper'

RSpec.describe TodosController, type: :controller do
  describe 'GET #index' do
    before do
      get :index
    end

    it 'renders :index' do
      expect(response).to render_template(:index)
    end

    it 'returns a 200 OK status' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      before do
        @attributes = build(:todo).attributes
        post :create, { todo: @attributes }
      end

      it 'renders todo json' do
        expect(JSON.parse(response.body)['todo']).to include('id')
      end

      it 'returns an ok status' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      before do
        post :create, { todo: { name: '' } }
      end

      it 'renders json error messages' do
        expect(JSON.parse(response.body)).to include('todos')
      end

      it 'returns a 404 status' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @todo = create(:todo)
      @attributes = @todo.attributes
    end

    context 'with valid params' do
      before do
        put :update, { todo: @attributes, id: @todo.id }
      end

      it 'renders todo json' do
        expect(JSON.parse(response.body)['todo']).to include('id')
      end

      it 'returns an ok status' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid params' do
      before do
        put :update, { todo: { name: '' }, id: @todo.id }
      end

      it 'renders json error messages' do
        expect(JSON.parse(response.body)).to include('todos')
      end

      it 'returns a 404 status' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'DELETE #delete' do
    before do
      @todo = create(:todo)
      delete :destroy, { id: @todo.id }
     end

    it 'renders todo json' do
      expect(JSON.parse(response.body)['todo']).to include('id')
    end

    it 'returns an ok status' do
      expect(response).to have_http_status(:ok)
    end
  end
end
