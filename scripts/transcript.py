import sys
from youtube_transcript_api import YouTubeTranscriptApi

print(YouTubeTranscriptApi.get_transcript(sys.argv[1]))