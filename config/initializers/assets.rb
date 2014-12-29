# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

# Rails.application.config.assets.precompile += %w( fonts/glyphicons-halflings-regular.eot )
# Rails.application.config.assets.precompile += %w( fonts/glyphicons-halflings-regular.svg )
# Rails.application.config.assets.precompile += %w( fonts/glyphicons-halflings-regular.ttf )
# Rails.application.config.assets.precompile += %w( fonts/glyphicons-halflings-regular.woff )
Rails.application.config.assets.precompile += %w( bootstrap.css )
# Rails.application.config.assets.precompile += %w( bootstrap.min.css )
Rails.application.config.assets.precompile += %w( bootstrap-theme.css )
Rails.application.config.assets.precompile += %w( fonts/* )
# Rails.application.config.assets.precompile += %w( stylesheets/* )
