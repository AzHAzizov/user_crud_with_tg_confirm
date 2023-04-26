<?php

declare(strict_types=1);

namespace Api\Http\Action;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\StreamInterface;
use Psr\Http\Message\UriInterface;
use Zend\Diactoros\Response\JsonResponse;

class HomeAction implements RequestInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        return new JsonResponse([
            'name' => 'App Api',
            'version' => '2.0'
        ]);
    }
    public function getRequestTarget()
    {
    }
    public function withRequestTarget(string $requestTarget)
    {
    }
    public function getMethod()
    {
    }
    public function withMethod(string $method)
    {
    }
    public function getUri()
    {
    }
    public function withUri(UriInterface $uri, bool $preserveHost = false): UriInterface
    {
        return $uri;
    }
    public function getProtocolVersion()
    {
    }
    public function withProtocolVersion(string $version)
    {
    }
    public function getHeaders()
    {
    }
    public function hasHeader(string $name)
    {
    }
    public function getHeader(string $name)
    {
    }
    public function getHeaderLine(string $name)
    {
    }
    public function withHeader(string $name, $value)
    {
    }
    public function withAddedHeader(string $name, $value)
    {
    }
    public function withoutHeader(string $name)
    {
    }
    public function getBody()
    {
    }


    /**
     * Return an instance with the specified message body.
     *
     * The body MUST be a StreamInterface object.
     *
     * This method MUST be implemented in such a way as to retain the
     * immutability of the message, and MUST return a new instance that has the
     * new body stream.
     *
     * @param StreamInterface $body Body.
     * @return static
     * @throws \InvalidArgumentException When the body is not valid.
     */
    public function withBody(StreamInterface $body): StreamInterface
    {

        if (empty($body)) {
            throw new \InvalidArgumentException("Empty body");
        }

        return $body;
    }
}
