class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(:id)
  end

  def create
    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 404
    end
  end

  def update
    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors.full_messages, status: 404
    end
  end

  def destroy
    if todo.destroy
      render json: todo
    else
      render json: todo.errors.full_messages, status: 404
    end
  end

  private

  def todo
    @todo ||=  if params[:id]
      Todo.find(params[:id])
    else
      Todo.new(todo_params)
    end
  end

  def todo_params
    params.require(:todo).permit(:name)
  end
end
