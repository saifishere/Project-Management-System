package com.zosh.service;

import com.zosh.modal.Comment;
import com.zosh.modal.Issue;
import com.zosh.modal.User;
import com.zosh.repository.CommentRepository;
import com.zosh.repository.IssueRepository;
import com.zosh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Comment createComment(Long issueId, Long userId, String content) throws Exception {

        Optional<Issue> optionalIssue = issueRepository.findById(issueId);
        Optional<User> optionalUser = userRepository.findById(userId);

        if(optionalIssue.isEmpty()){
            throw new Exception("issue not found with id " + issueId);
        }
        if(optionalUser.isEmpty()){
            throw new Exception("user not found with id " + userId);
        }

        Issue issue = optionalIssue.get();
        User user = optionalUser.get();

        Comment comment = new Comment();

        comment.setIssue(issue);
        comment.setUser(user);
        comment.setCreatedDateTime(LocalDateTime.now());
        comment.setContent(content);

        Comment savedComment = commentRepository.save(comment);

        issue.getComments().add(savedComment);

        return savedComment;
    }

    @Override
    public void deleteComment(Long commentId, Long userId) throws Exception {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        Optional<User> optionalUser = userRepository.findById(userId);

        if(optionalUser.isEmpty()){
            throw new Exception("user not found with id " + userId);
        }

        if(optionalComment.isEmpty()){
            throw new Exception("comment not found with id " + commentId);
        }

        Comment comment = optionalComment.get();
        User user = optionalUser.get();

        if(comment.getUser().equals(user)){
            commentRepository.delete(comment);
        }
        else{
            throw new Exception("User do not have permission to delete this comment");
        }

    }

    @Override
    public List<Comment> findCommentByIssueId(Long issueId) {
        return commentRepository.findByIssueId(issueId);
    }
}
