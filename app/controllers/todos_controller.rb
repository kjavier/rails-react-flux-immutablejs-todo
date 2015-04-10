class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 404
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:name)
  end
end
