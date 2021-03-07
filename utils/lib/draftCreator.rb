class DraftCreator

  attr_accessor :title, :date, :description, :directions, :tags, :ingredients, :hardware, :content

  def initialize(title)
    @title = title || "No title"
  end

  def self.new_recipe(args)
    draft = self.new(args.title)
    draft.date = args.date || Time.now.strftime("%F")
    draft.description = args.description || ""
    draft.directions = args.directions || []
    draft.tags = args.tags || []
    draft.ingredients = args.ingredients || []
    draft.hardware = args.hardware || []
  end

  def self.new_definition(args)
    draft = self.new(args.title)
    draft.content = args.content || ""
  end

  def self.new_concept(args)
    draft = self.new(args.title)
    draft.date = args.date || Time.now.strftime("%F")
    draft.description = args.description || ""
    draft.content = args.content || ""
  end

end