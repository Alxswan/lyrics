json.array!(@lyrics) do |lyric|
  json.extract! lyric, :id
  json.url lyric_url(lyric, format: :json)
end
