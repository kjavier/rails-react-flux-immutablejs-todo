class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name

  self.root = 'todo'
end
