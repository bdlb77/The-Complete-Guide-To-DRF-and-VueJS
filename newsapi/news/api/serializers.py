from datetime import datetime
from django.utils.timesince import timesince
from rest_framework import serializers
from news.models import Article, Journalist


class ArticleSerializer(serializers.ModelSerializer):

    time_since_publication = serializers.SerializerMethodField()
    # author = JournalistSerializer(read_only=True)
    # author = serializers.StringRelatedField()

    class Meta:
        model = Article
        exclude = ("id",)
        # fields = "__all__" # we want all the fields of our model
        # fields = ("title", "description", "body") # we want only these

    def get_time_since_publication(self, object):
        publication_date = object.publication_date
        now = datetime.now()
        time_delta = timesince(publication_date, now)
        return time_delta

    def validate(self, data):
        """Check that description and date are different"""
        if data['title'] == data['description']:
            raise serializers.ValidationError(
                "Title must be different than description."
            )
        return data

    def validate_title(self, value):
        if len(value) < 30:
            raise serializers.ValidationError("Title must be at least 30 char")
        return value


class JournalistSerializer(serializers.ModelSerializer):
    articles = serializers.HyperlinkedRelatedField(many=True,
                                                   read_only=True,
                                                   # name of view url endpoint want to use to generate hyperlink
                                                   view_name="article-detail")


    class Meta:
        model = Journalist
        fields = "__all__"
